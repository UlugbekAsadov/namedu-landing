import { SOCIAL_MEDIA } from '@/utils/static-resources/socialmedia.static';

interface ISocialSidebar {
  className?: string;
}
const SocialSidebar = ({ className }: ISocialSidebar) => {
  return (
    <div
      className={` fixed right-0 top-1/3 z-50 flex flex-col gap-3 p-2 bg-[#122F4C]/70 rounded-l-12 ${className}`}
    >
      {SOCIAL_MEDIA.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.icon}
            alt={item.link}
            className="w-8 h-8"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
