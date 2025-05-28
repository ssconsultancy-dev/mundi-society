import React from 'react';
import { FileText, Clock, AlertCircle } from 'lucide-react';

const notices = [
  {
    id: '1',
    title: 'Annual General Meeting 2024',
    date: '2024-03-15',
    pdfUrl: '/notices/agm-2024.pdf',
    isNew: true,
    isUrgent: true
  },
  {
    id: '2',
    title: 'Community Development Program Guidelines',
    date: '2024-03-10',
    pdfUrl: '/notices/guidelines.pdf',
    isNew: true
  },
  {
    id: '3',
    title: 'Monthly Newsletter - February 2024',
    date: '2024-02-28',
    pdfUrl: '/notices/newsletter-feb.pdf',
    isNew: false
  },
  {
    id: '4',
    title: 'Society Rules and Regulations Update',
    date: '2024-02-15',
    pdfUrl: '/notices/rules-update.pdf',
    isNew: false
  },
  {
    id: '5',
    title: 'Financial Report 2023',
    date: '2024-01-30',
    pdfUrl: '/notices/financial-report.pdf',
    isNew: false
  }
];

const Notices = () => {
  return (
    <section id="notices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Notices & Documents</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                Recently Added
              </span>
              <span className="flex items-center gap-2 text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">
                <AlertCircle className="w-4 h-4" />
                Urgent
              </span>
            </div>

            <div className="divide-y divide-gray-200">
              {notices.map((notice) => (
                <div key={notice.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-2">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {notice.title}
                          </h3>
                          {notice.isNew && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                              New
                            </span>
                          )}
                          {notice.isUrgent && (
                            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Posted on {new Date(notice.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <a
                      href={notice.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                    >
                      View PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;