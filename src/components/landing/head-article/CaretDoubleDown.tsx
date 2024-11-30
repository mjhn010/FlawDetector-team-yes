"use client";
import Image from "next/image";
import CaretDoubleDownIcon from "/public/images/CaretDoubleDown.svg";
/**
 * `CaretDoubleDown` 컴포넌트는 페이지를 아래로 스크롤하는 버튼을 렌더링합니다.
 *
 * @returns {JSX.Element} 스크롤을 유도하는 버튼을 렌더링하는 JSX 요소를 반환합니다.
 */
function CaretDoubleDown({ targetId }: { targetId: string }) {
  const handleScrollDown = () => {
    const target = document.querySelector(`#${targetId}`);

    if (target instanceof HTMLElement) {
      const targetPosition = target.offsetTop;
      const offset = 72.35; // 고정 헤더만큼 이동
      console.log(targetPosition);

      window.scrollTo({
        top: (targetPosition - offset) * 0.72,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleScrollDown}
      className="animate-bounce focus:outline-none"
      aria-label="Scroll Down"
    >
      <Image
        src={CaretDoubleDownIcon}
        alt="Scroll Down"
        width={56}
        height={56}
      />
    </button>
  );
}

export default CaretDoubleDown;
