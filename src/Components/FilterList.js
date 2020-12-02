import React from 'react';

//styles
import '../Styles/FilterList.scss';

//Component
import FilterListEach from './FilterListEach';

function FilterList() {
  let filterContent = [
    {
      heading: 'Data Posted',
      items: ['24 hours', '3 days', '7 days', '30 days'],
      type: 'radio',
    },
    {
      heading: 'Job Type',
      items: ['All', 'Full-Time Employee'],
      type: 'checkbox',
    },
    {
      heading: 'Categories',
      items: [
        'Information Technology',
        'Engineering',
        'Professional Services',
        'Mangemenet',
        'QA - Quality Control',
        'Other',
        'Accounting',
        'Finance',
        'Sales',
        'Design',
        'General Bussiness',
        'Skilled Labour - Trades',
        'Supply Chain',
        'Inventory',
        'Manufacturing',
        'Consultant',
        'Strategy-Planning',
        'Legal',
      ],
      type: 'checkbox',
    },
    {
      heading: 'States',
      items: [
        'Maharashtra',
        'Chandigarh',
        'Karnataka',
        'Uttar Pradesh',
        'Kerala',
        'Telangana',
        'Haryana',
      ],
      type: 'checkbox',
    },
    {
      heading: 'City',
      items: ['Pune', 'Chandigarh', 'Bengaluru', 'Noida', 'Thiruvananthapuram'],
      type: 'checkbox',
    },
  ];
  return (
    <div className="filterlist">
      <FilterListEach content={filterContent} />
    </div>
  );
}

export default FilterList;
