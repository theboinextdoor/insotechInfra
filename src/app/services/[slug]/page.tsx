import { notFound } from 'next/navigation';
import { services } from '@/lib/services/services';
import ServiceClientPage from './service-client-page';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.title }));
}

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  const service = services.find((s) => s.title === params.slug);

  if (!service) return notFound();

  return <ServiceClientPage service={service} />;
}
