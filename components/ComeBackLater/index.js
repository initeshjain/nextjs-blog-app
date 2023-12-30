import styles from "./ComeBackLater.module.css";
import Image from "next/image";

export default function ComeBackLater({ msg, searchText, selectedCategories }) {
  return (
    <div className={styles.notFound}>
      <Image alt={msg} src={"/towing.svg"} height={300} width={300} />
      <span className={styles.msg}>{msg}</span>
      {searchText && (
        <div>
          <strong>Your search query is:</strong> {searchText}
        </div>
      )}
      {selectedCategories && selectedCategories.length > 0 && (
        <div>
          <strong>Your selected categories are:</strong>{" "}
          {selectedCategories.join(" | ")}
        </div>
      )}
    </div>
  );
}
