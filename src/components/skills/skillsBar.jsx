'use client';

import Image from 'next/image';

const Skill = (props) => {
  const { value, title, setContentActive, urlImage, contentActive } =
    props;

  return (
    <li>
      <div
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 group cursor-pointer ${
          contentActive === value ? 'bg-neutral-800' : ''
        }`}
        onClick={() => setContentActive(value)}>
        <Image
          className="rounded-full"
          src={`/images/stacks/${urlImage}`}
          width={20}
          height={20}
          alt="icon"
        />
        <span className="ms-3 md:block hidden">{title}</span>
      </div>
    </li>
  );
};
const SkillsBar = (props) => {
  const { setContentActive, contentActive } = props;
  return (
    <aside
      id="default-sidebar"
      className=" z-40 md:w-64 w-fit bg-neutral-900 h-fit rounded-xl border-b border-l border-neutral-700"
      aria-label="Sidebar">
      <div className="h-full px-3 py-4 rounded-lg overflow-y-auto bg-neutral-900">
        <ul className="space-y-2 font-medium">
          <Skill
            value={'javascript'}
            title={'Javascript'}
            setContentActive={setContentActive}
            urlImage={'icon-javascript.svg'}
            contentActive={contentActive}
          />
          <Skill
            value={'react'}
            title={'React'}
            setContentActive={setContentActive}
            urlImage={'icon-react.svg'}
            contentActive={contentActive}
          />
          <Skill
            value={'next'}
            title={'NextJs'}
            setContentActive={setContentActive}
            urlImage={'icon-nextjs.svg'}
            contentActive={contentActive}
          />
          <Skill
            value={'node'}
            title={'NodeJs'}
            setContentActive={setContentActive}
            urlImage={'icon-nodejs.svg'}
            contentActive={contentActive}
          />
          <Skill
            value={'mongodb'}
            title={'MongoDB'}
            setContentActive={setContentActive}
            urlImage={'icon-mongodb.svg'}
            contentActive={contentActive}
          />
          <Skill
            value={'figma'}
            title={'Figma'}
            setContentActive={setContentActive}
            urlImage={'icon-figma.svg'}
            contentActive={contentActive}
          />
          <Skill
            value={'laravel'}
            title={'Laravel'}
            setContentActive={setContentActive}
            urlImage={'laravel-2.svg'}
            contentActive={contentActive}
          />
        </ul>
      </div>
    </aside>
  );
};

export default SkillsBar;
