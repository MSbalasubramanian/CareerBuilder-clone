import { React, useState } from 'react';

//styles
import '../Styles/Result.scss';

//components
import ResultCard from './ResultCard';
import Pagination from './Pagination';

function Result() {
  let ResultJobs = [
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 2 days ago',
      company: 'UST Global',
      location: 'Hyderabad',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 10 days ago',
      company: 'UST Global',
      location: 'Chennai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'zoo',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 2 days ago',
      company: 'UST Global',
      location: 'Hyderabad',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 10 days ago',
      company: 'UST Global',
      location: 'Chennai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'Madurai',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'delhi',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },

    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'z00',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
    {
      heading: 'Sr.Software Developer',
      datePosted: 'posted 1 days ago',
      company: 'UST Global',
      location: 'zoo',
      type: 'Emp Type Jtft',
      description: `Sr.DevOps Engineer for Hyderabad Location-AWS EC2 instance setup using
          various AWIs-EKS Cluster steup and monitoring-Experience configuring`,
    },
  ];
  let Total = ResultJobs.length;

  let ResultPerPage = 10;

  let pages = Math.ceil(Total / ResultPerPage);

  let newArray = [];

  for (let page = 1; page <= pages; page++) {
    newArray.push(page);
  }

  const [page, setPage] = useState(1);

  let pageStart = (page - 1) * ResultPerPage;
  let pageEnd = page * ResultPerPage;

  return (
    <section className="result">
      <div>
        <p>Sort By:</p>
        <a href="#">Relevance</a>
        <span>|</span>
        <a href="#">Date</a>
      </div>
      {ResultJobs.slice(pageStart, pageEnd).map((value) => (
        <ResultCard
          heading={value.heading}
          date={value.datePosted}
          company={value.company}
          location={value.location}
          type={value.type}
          description={value.description}
        />
      ))}

      <Pagination pageArr={newArray} click={(value) => UpdatePage(value)} />
    </section>
  );

  function UpdatePage() {
    if (page <= newArray.length - 1) {
      setPage(page + 1);
    }
  }
}

export default Result;
