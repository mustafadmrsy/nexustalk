export default function Head(): React.ReactElement {
  const iconHref = "/images/logo.png";
  return (
    <>
      <link rel="icon" href={iconHref} />
      <link rel="shortcut icon" href={iconHref} />
      <link rel="apple-touch-icon" href={iconHref} />
    </>
  );
}


