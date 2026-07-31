type Props = {
  className?: string;
};

export default function Circle({ className = "" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
      />
    </svg>
  );
}