import styles from "./History.module.css"; // Import the CSS module

interface HistoryProps {
  history: (string | null)[][];
  onHistoryClick: (step: number) => void;
}

export default function History({ history, onHistoryClick }: HistoryProps) {
  return (
    <div className={styles.historyList}>
      {history.map((_, step) => (
        <button
          key={step}
          className={styles.historyButton} // Apply the historyButton style
          onClick={() => onHistoryClick(step)}
        >
          Go back to turn {step}
        </button>
      ))}
    </div>
  );
}
