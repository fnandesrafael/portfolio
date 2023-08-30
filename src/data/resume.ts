type ResumeDataProps = {
  educations: Array<{
    title: string;
    location: string;
    period: string;
  }>;
  jobs: Array<{
    title: string;
    location: string;
    period: string;
  }>;
};

const resumeData: ResumeDataProps = {
  educations: [
    {
      title: 'Digital Game Developer',
      location: 'at State Technical School Cícero Dias',
      period: '2017 - 2019',
    },
    {
      title: 'Fullstack Web Developer',
      location: 'at Trybe',
      period: '2021 - 2022',
    },
    {
      title: 'Google UX Design Professional Certificate',
      location: 'at Coursera',
      period: '2023 - Current',
    },
  ],
  jobs: [
    {
      title: 'Looking For an Oportunity',
      location: 'at Your Enterprise',
      period: '2023 - 20XX',
    },
  ],
};

export default resumeData;
