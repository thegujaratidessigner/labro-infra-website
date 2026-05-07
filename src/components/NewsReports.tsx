import { ExternalLink, Newspaper } from 'lucide-react';

export default function NewsReports() {
  const newsItems = [
    {
      title: 'Hindustan Times',
      url: 'https://www.hindustantimes.com/cities/mumbai-news/mmrda-to-replicate-cidco-s-and-midc-s-land-acquisition-framework-for-third-mumbai-101761244226573.html',
    },
    {
      title: 'The Indian Express',
      url: 'https://indianexpress.com/article/cities/mumbai/third-mumbai-land-acquisition-mmrda-projectvillagers-consent-sought-10643280/',
    },
    {
      title: 'Times of India',
      url: 'https://timesofindia.indiatimes.com/city/mumbai/mmrda-takes-lead-in-developing-third-mumbai-as-new-town-development-authority/articleshow/114435923.cms',
    },
    {
      title: 'News18',
      url: 'https://www.news18.com/cities/mumbai-news/do-you-know-third-mumbai-where-is-it-why-is-it-in-the-news-the-infra-plans-explained-ws-kl-9675379.html',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            News & Reports
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news and reports about Mumbai 3.0 (KSC) development from leading media publications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-blue-900 rounded-lg p-3 flex-shrink-0">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center text-blue-600 text-sm mt-auto">
                <span>Read Article</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
