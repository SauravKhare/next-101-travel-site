import Image from "next/image";

type FeatureItemProps = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};

const FeatureItem = ({ title, icon, variant, description }: FeatureItemProps) => {
  return (
  <li className="flex w-full flex-1 flex-col items-start">
    <div className="rounded-full p-4 lg:p-7">
        <Image
        src={icon}
        alt="map"
        width={28}
        height={28}
        />
    </div>
  </li>
  );
};

export default FeatureItem;
