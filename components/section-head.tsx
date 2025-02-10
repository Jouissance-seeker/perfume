import Image from 'next/image';

interface ISectionHeadProps {
  title: string;
  spark: 'brown' | 'blue';
}

export function SectionHead(props: ISectionHeadProps) {
  return (
    <div className="relative flex justify-center">
      <p className="relative font-pelak text-xl font-bold text-blue-300 after:absolute after:-bottom-1 after:-left-3 after:-z-10 after:h-4 after:w-[200px] after:rounded-full after:bg-brown-200 lg:text-2xl">
        {props.title}
      </p>
      <Image
        src={
          props.spark === 'brown'
            ? '/images/spark-brown.svg'
            : '/images/spark-blue.svg'
        }
        alt="spark"
        width={20}
        height={20}
        className="absolute -top-4 -ml-72"
      />
    </div>
  );
}
