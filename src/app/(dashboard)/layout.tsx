import Footer from "@/components/footer";
import Header from "@/components/header";

export type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <body className="flex flex-col items-center justify-between p-24 min-h-screen min-w-min">
      <Header />
      {children}
      <Footer />
    </body>
  );
}
