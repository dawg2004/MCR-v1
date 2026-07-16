// TEMP BRIDGE: WO-002. Home本実装完了後にWO-00Xで置き換え予定
export default function Home() {
  return (
    <iframe
      src="/legacy-home.html"
      title="MCR Occult Engine (legacy bridge)"
      className="h-full w-full flex-1 border-0"
    />
  );
}
