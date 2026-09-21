export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col items-center bg-black pb-3 pt-1 text-center text-white">
      <span>Copyright © {year}</span>
      <span>Iwama Shinshin Aiki Shuren Kai Uruguay</span>
    </footer>
  );
}
