import { Details } from '@/presentation/components/ui/organisms/Details';
import { Metadata } from 'next';
interface Props {
  params: { name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    return {
      title: `${decodeURIComponent(params.name)}`,
      description: 'Blog AI',
      icons: {
        icon: [
          {
            media: '(prefers-color-scheme: light)',
            url: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
            href: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
          },
          {
            media: '(prefers-color-scheme: dark)',
            url: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
            href: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: 'Blog',
      description: `Blog AI`,
      category: 'blog, IA, tecnologia',
      authors: {
        name: 'Sergio Dario Moreno Sosa',
        url: 'https://github.com/RunyShark',
      },
      icons: {
        icon: [
          {
            media: '(prefers-color-scheme: light)',
            url: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
            href: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
          },
          {
            media: '(prefers-color-scheme: dark)',
            url: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
            href: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
          },
        ],
      },
    };
  }
}

export default function DetailsPage() {
  return (
    <div className="flex-1 flex flex-col screen w-full justify-between">
      <Details />
    </div>
  );
}
