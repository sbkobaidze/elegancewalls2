import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { AvatarFunc } from '@/components/ui/avatar';
import { Collection } from 'lib/shopify/types';
import Link from 'next/link';
import { colors } from '../mega-menu/megamenu-nav';
import { wallpaperStyles } from '../mega-menu/megamenu-nav';
const MobileNavigation = ({ collections }: { collections: Collection[] }) => {
  const displayCollections = collections.map((collection, index) => {
    return (
      <Link
        href={collection.path}
        className="flex   items-center  justify-between rounded-md bg-accent p-3 font-semibold"
        key={index}
      >
        <p>{collection.title}</p>
        {AvatarFunc(collection.image?.url, collection.title.slice(0, 1), 'h-10 w-10')}
      </Link>
    );
  });

  const displayColorsOrStyle = (arr: any[]) => {
    return arr.map((item, index) => {
      return (
        <Link
          href={`/search?color=${item.title ? item.title : item}`}
          className="flex   items-center  justify-between rounded-md bg-accent p-3 font-semibold"
          key={index}
        >
          {item.title || item}
          {item.title && item.hex && (
            <div className={`h-5 w-5 rounded-full `} style={{ backgroundColor: item.hex }}></div>
          )}
        </Link>
      );
    });
  };

  const mostPopular = Array.from({ length: 5 });

  return (
    <div className="mb-3 flex flex-col gap-8">
      <Accordion type="single" collapsible className="flex flex-col gap-3">
        <AccordionItem value="item-1">
          <AccordionTrigger className="rounded-md bg-gold px-2 text-white">
            Shop by collection
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex max-h-screen flex-col gap-3 overflow-y-scroll pt-4 ">
              {displayCollections}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="rounded-md bg-gold px-2 text-white">
            Shop by style
          </AccordionTrigger>
          <AccordionContent>
            {' '}
            <div className="flex max-h-[500px] flex-col gap-3 overflow-y-scroll pt-4 ">
              {displayColorsOrStyle(wallpaperStyles)}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="rounded-md bg-gold px-2 text-white">
            Shop by color
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex max-h-[500px] flex-col gap-3 overflow-y-scroll pt-4 ">
              {displayColorsOrStyle(colors)}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col gap-3">
        <h3 className="text-md col-span-1 font-semibold ">Most Popular</h3>
        {mostPopular.map((component, index) => (
          <a
            key={index}
            className={
              'block select-none space-y-1 rounded-md bg-accent  p-3 leading-none no-underline opacity-80 outline-none transition-colors hover:text-accent-foreground hover:opacity-100 focus:bg-accent focus:text-accent-foreground'
            }
          >
            <div className="flex w-full items-center justify-between text-sm font-medium leading-none">
              Acoustic Wallpaper
              {AvatarFunc('/download.jpeg', 's', 'h-10 w-10')}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
