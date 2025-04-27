type SiteConfigProps = {
  title: string;
  description: string;
  icons: {
    icon: {
      url: string;
      sizes: string;
    }[];
    shortcut: string;
  };
};
