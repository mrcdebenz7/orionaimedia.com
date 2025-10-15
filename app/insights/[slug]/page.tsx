import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return ['post-1', 'post-2', 'post-3'].map((slug) => ({ slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">{params.slug.replace('-', ' ')}</h1>
        <article className="prose prose-invert mt-6">
          <p>
            Placeholder article content. Replace with your editorial writing and add JSON-LD Article schema.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
