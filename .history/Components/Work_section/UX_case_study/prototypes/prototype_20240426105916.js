import Image from "next/image";

export default function Prototype(props) {
  return (
    <div>
      <div>
        <div>
          <h2>{props.prototype_type} Prototype</h2>

          <div>
            <p>Summary</p>
            <p
              dangerouslySetInnerHTML={{
                __html: props.prototype_summary,
              }}
            />
          </div>

          {props.prototype_image_link.map((image_link, index) => (
            <div key={index}>
              <Image
                src={image_link}
                alt="prototype"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
