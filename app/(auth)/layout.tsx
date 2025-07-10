export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='flex justify-items-center items-center min-h-screen w-full'>{children}</div>;
}