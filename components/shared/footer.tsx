"use client";

import { z } from "zod";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Wrapper from "./wrapper";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 character(s)")
    .max(50, "Name must be at most 50 character(s)"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(2, "Email must be at least 2 character(s)"),
  from: z.string().optional(),
  company: z.string().optional(),
  message: z
    .string({
      message: "Message must be at least 2 character(s)",
    })
    .min(2, "Message must be at least 2 character(s)"),
  newsletter: z.boolean().default(false).optional(),
});

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      from: "",
      newsletter: false,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message submitted successfully");
  }

  return (
    <footer className="bg-black-950 mt-96 rounded-t-[50px] px-0 lg:rounded-t-[100px] lg:px-8 2xl:rounded-t-[200px] 2xl:px-0">
      <Wrapper className="pt-20 pb-14 lg:py-[167px]">
        <div className="flex flex-col justify-between gap-8 md:gap-6 lg:flex-row">
          <div className="w-full md:mt-5 md:max-w-[600px] lg:max-w-[478px]">
            <h2 className="mb-8 md:mb-16">Hey There!</h2>

            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-base md:text-lg">
                This is a good place to start.
              </p>
              <p className="text-base md:text-lg">
                Tell us about your product, your timeline, how you heard about
                us, and where you’re located.
              </p>
              <p className="text-base md:text-lg">
                We read every message, and we reach out too. So thanks for
                reaching out in advance.
              </p>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-8 md:gap-14 lg:max-w-[629px]"
            >
              <div className="flex w-full flex-col items-start gap-8 sm:flex-row">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2">
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          type="text"
                          placeholder="Enter your name"
                          className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2">
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          type="email"
                          placeholder="Enter your email"
                          className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex w-full flex-col items-start gap-8 sm:flex-row">
                <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2">
                      <FormLabel>How did you here about us?</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          type="text"
                          placeholder="Type in your answer"
                          className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2">
                      <FormLabel>What stage is your company?</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          type="text"
                          placeholder="Select One"
                          className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-2">
                    <FormLabel>Type your message*</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Tell us what you need us to know"
                        className="w-full resize-none rounded-none border-transparent border-b-white bg-transparent p-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex w-full items-center justify-between gap-2">
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-black-600 text-sm font-normal">
                          Signup to Newsletter
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  size={"lg"}
                  className="hidden w-max sm:flex"
                >
                  <span className="text-base font-normal">See you soon</span>
                  <FiArrowRight className="ml-2 !size-5" />
                </Button>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="flex w-max sm:hidden"
                >
                  <span>See you soon</span>
                  <FiArrowRight className="ml-2 !size-5" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Wrapper>

      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group mt-20 flex flex-col gap-10 lg:mt-[100px]"
      >
        <Wrapper className="flex flex-wrap justify-between gap-4 sm:gap-8">
          <div className="h-max">
            <Link href="/" className="h-max">
              <Image
                src={
                  isHovered ? "/svgs/logo-primary.svg" : "/svgs/logo-white.svg"
                }
                alt="GADA Studios"
                width={83}
                height={18.3}
                quality={100}
                priority
                className="w-full"
              />
            </Link>
          </div>

          <p className="w-full max-w-[491px] text-base leading-[1.8]">
            We build Identities and products for ambitious brands. We are the
            bridge that connects the dots between your business model and your
            user&apos;s needs.
          </p>

          <div className="flex w-full flex-col gap-2 sm:w-max">
            <Link
              href="mailto:gadastudious240@gmail.com"
              className="text-base underline md:text-lg"
            >
              gadastudious240@gmail.com
            </Link>
            <Link
              href="tel:2347064642407"
              className="text-base underline md:text-lg"
            >
              +234 706 464 2407
            </Link>
          </div>

          <div className="flex max-w-[184px] flex-col gap-4 md:gap-2">
            <Link href="/contact">
              <Button>Get in touch</Button>
            </Link>

            <div className="flex items-center justify-evenly">
              <Link href="#">
                <IoLogoLinkedin className="size-6" />
              </Link>
              <Link href="#">
                <FaTwitter className="size-6" />
              </Link>
              <Link href="#">
                <FaInstagram className="size-6" />
              </Link>
              <Link href="#">
                <FaFacebook className="size-6" />
              </Link>
            </div>
          </div>
        </Wrapper>

        <div
          className={cn(
            "h-16 w-full pt-4 transition-all delay-100 duration-700 md:h-[175px] md:pt-14",
            {
              "pt-0 md:pt-0": isHovered,
            },
          )}
        >
          <div className="mx-auto size-full w-full max-w-7xl overflow-y-clip px-5 md:max-w-[1434px]">
            <svg
              viewBox="0 0 1392 350"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto size-auto"
            >
              <path
                d="M167.782 150.27H348.556C359.014 260.826 286.306 349.47 173.758 349.47C69.676 349.47 0.454001 272.778 0.454001 176.166C0.454001 80.55 67.684 0.869969 174.754 0.869969C260.41 0.869969 324.154 52.662 341.086 124.872H248.956C237.004 97.98 209.614 81.048 174.256 82.044C116.488 83.538 84.118 124.872 84.118 174.672C84.118 224.97 116.986 268.296 175.75 268.296C215.092 268.296 244.474 250.866 257.422 222.978H167.782V150.27ZM700.739 342H607.613L584.207 280.248H454.727L431.819 342H342.179L475.145 8.33999H567.275L700.739 342ZM518.969 108.936L481.121 210.528H557.813L518.969 108.936ZM722.527 342V8.33999H866.449C967.045 8.33999 1039.75 78.06 1039.75 174.174V175.668C1039.75 271.782 967.045 342 866.449 342H722.527ZM864.955 88.02H804.697V262.32H864.955C918.739 262.32 956.089 227.958 956.089 175.668V174.174C956.089 121.884 918.739 88.02 864.955 88.02ZM1391.81 342H1298.69L1275.28 280.248H1145.8L1122.89 342H1033.25L1166.22 8.33999H1258.35L1391.81 342ZM1210.04 108.936L1172.19 210.528H1248.89L1210.04 108.936Z"
                className={cn(
                  "fill-white transition-colors delay-100 duration-700",
                  {
                    "fill-primary-500": isHovered,
                  },
                )}
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
