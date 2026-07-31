type Props = {
  className?: string;
};

export default function Star({ className = "" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="
        M50 8
        L58 42
        L92 50
        L58 58
        L50 92
        L42 58
        L8 50
        L42 42
        Z
        "
      />
    </svg>
  );
}