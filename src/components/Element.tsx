import styles from "./Element.module.css";

interface ElementProps {
  value: string | null;
  onSquareChange: () => void;
}

export default function Square({ value, onSquareChange }: ElementProps) {
  return (
    <button className={styles.Box} onClick={onSquareChange}>
      {value}
    </button>
  );
}
