type Props = {
  className?: string;
};

export default function Heart({ className = "" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="
        M50 88
        C20 66
        8 49
        8 30

        C8 15
        19 6
        33 6

        C43 6
        50 14
        50 14

        C50 14
        57 6
        67 6

        C81 6
        92 15
        92 30

        C92 49
        80 66
        50 88
        Z
        "
      />
    </svg>
  );
}