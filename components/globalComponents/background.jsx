import { UiButton } from "../ui/ui-button";

export function Back({ children, isButtonReturn }) {
  return (
    <div class="flex h-dvh w-full max-w-full items-center justify-center bg-[#2d3033]">
      <div class="revative h-[900px] w-[750px] rounded-[20px] drop-shadow-2xl bg-gradient-to-br from-[#e6e9ff] to-[#dcdcdc]">
        {children}
        {isButtonReturn && (
          <div className="absolute bottom-0 right-[36%]">
            <UiButton
              type="default"
              size="medium"
              onClick={() => {
                window.location.assign("http://localhost:3000");
              }}
            >
              ⬅️ назад
            </UiButton>
          </div>
        )}
      </div>
    </div>
  );
}
