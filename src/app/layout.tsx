import "./app.css";

export type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      {children}
    </html>
  );
}
