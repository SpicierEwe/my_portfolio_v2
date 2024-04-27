import Image from "next/image";
import styles from "./prototype.module.css";

export default function Prototype(props) {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.section_padding}>
          <h2 className={styles.section_heading}>
            {props.prototype_type} Prototype
          </h2>

          <div className={styles.summary_container}>
            <p className={styles.sub_heading}>Summary</p>
            <p
              className={styles.summary_style}
              dangerouslySetInnerHTML={{
                __html: props.prototype_summary,
              }}
            ></p>
          </div>

          {props.prototype_image_link.map((image_link, index) => {
            return (
              <Image
                key={index}
                className={styles.image_style}
                src={image_link}
                alt="wireframes"
                width={1000}
                height={1000}
              ></Image>
            );
          })}
        </div>
      </div>
    </div>
  );
}
