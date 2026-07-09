import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Header({ settings, setSettings }: WidgetContext) {
  const dark = settings.dark !== false;
  return (
    <div className="wx-header" style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <button onClick={() => window.dispatchEvent(new CustomEvent("app:search"))}>Search</button>
      <button onClick={() => setSettings({ dark: !dark })} title="Toggle theme">{dark ? "Dark" : "Light"}</button>
      <button onClick={() => window.dispatchEvent(new CustomEvent("app:locale"))} title="Language">EN / AR</button>
    </div>
  );
}
registerWidget({ key: "header", title: "Header", defaultZone: "topbar", Comp: Header });
