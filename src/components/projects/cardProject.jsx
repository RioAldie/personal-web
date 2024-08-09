import Image from 'next/image';
import Link from 'next/link';

const CardProject = (props) => {
  const { name, about, stacks, image, url } = props;
  return (
    <div>
      <Link
        href={url}
        target="_blank"
        className="flex flex-col items-center  bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow md:flex-row md:max-w-xl  ">
        <Image
          className="object-cover w-full  rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={image}
          alt="nutrify"
          width={400}
          height={400}
        />
        <div className="flex flex-col flex-wrap  justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl w-80  font-bold tracking-tight text-gray-900 dark:text-white">
            {name} || {about}
          </h5>
          <p className="mb-3 font-normal w-80 min-h-20 text-wrap  text-gray-700 dark:text-gray-400">
            Website ini dikembangkan {stacks}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardProject;
