document.getElementById('generateContent').addEventListener('click', generateContent);
document.getElementById('copyContent').addEventListener('click', copyToClipboard);

function generateContent() {
  const projectName = document.getElementById('projectName').value;
  const projectCategory = document.getElementById('projectCategory').value;
  const integrationDescription = document.getElementById('integrationDescription').value;

  if (!projectName || !projectCategory || !integrationDescription) {
    alert('Please fill in all fields!');
    return;
  }

  let content = '';

  switch (projectCategory) {
    case 'Marketing':
      content = `
      <h3>Marketing & Advertising Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Social Media Posts:</strong> Create engaging posts for platforms like Instagram and Facebook, focusing on visuals and catchy captions.</li>
        <li><strong>Blog Articles:</strong> Write informative articles that establish brand authority, covering industry trends, tips, and guides.</li>
        <li><strong>Short Videos:</strong> Produce captivating short videos highlighting your brand's unique selling propositions.</li>
        <li><strong>Email Campaigns:</strong> Develop email newsletters to keep your audience informed and engaged with personalized content.</li>
        <li><strong>Ad Copy:</strong> Craft compelling ad copy that drives conversions across various channels.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Education':
      content = `
      <h3>Education Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Course Content:</strong> Create comprehensive course materials that cover key concepts, lesson plans, and assessments.</li>
        <li><strong>Quizzes and Tests:</strong> Develop quizzes to assess student understanding and progress.</li>
        <li><strong>Study Guides:</strong> Provide summaries and guides that aid students in grasping complex topics with ease.</li>
        <li><strong>Educational Videos:</strong> Produce videos that explain challenging concepts in an engaging manner.</li>
        <li><strong>Interactive Learning:</strong> Incorporate gamification elements to enhance the learning experience.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Entertainment':
      content = `
      <h3>Entertainment Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Scriptwriting:</strong> Create scripts for movies, TV shows, or YouTube videos that captivate audiences.</li>
        <li><strong>Creative Writing:</strong> Write novels, short stories, poetry, and fan fiction to entertain and inspire readers.</li>
        <li><strong>Podcast Scripts:</strong> Develop engaging scripts for podcasts that tell compelling stories or provide valuable information.</li>
        <li><strong>Content for Social Media:</strong> Generate fun and engaging content for platforms like TikTok and Instagram.</li>
        <li><strong>Game Narratives:</strong> Write intriguing backstories and plotlines for games and interactive media.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Journalism':
      content = `
      <h3>Journalism Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>News Articles:</strong> Provide timely reporting on current events and trends affecting communities.</li>
        <li><strong>Investigative Reports:</strong> Create in-depth pieces that explore important social issues with well-researched evidence.</li>
        <li><strong>Feature Stories:</strong> Write human-interest stories that resonate with audiences and highlight impactful narratives.</li>
        <li><strong>Editorials:</strong> Develop opinion pieces that encourage public discourse on relevant topics.</li>
        <li><strong>Online Content:</strong> Adapt articles for digital platforms, including SEO optimization for increased visibility.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Technology':
      content = `
      <h3>Technology Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Documentation:</strong> Create user manuals, FAQs, and help guides for software or hardware products.</li>
        <li><strong>Technical Articles:</strong> Explain complex tech topics or product features in an easy-to-understand manner.</li>
        <li><strong>Blog Posts:</strong> Write articles covering the latest trends in technology, product reviews, and comparisons.</li>
        <li><strong>Video Tutorials:</strong> Develop video content that demonstrates software functionality or troubleshooting steps.</li>
        <li><strong>Case Studies:</strong> Provide in-depth analyses of successful technology implementations or innovations.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Healthcare':
      content = `
      <h3>Healthcare Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Patient Education Materials:</strong> Create brochures, articles, and videos about health conditions and treatments.</li>
        <li><strong>Research Summaries:</strong> Develop reports that distill complex medical research for broader audiences.</li>
        <li><strong>Wellness Guides:</strong> Write articles focusing on healthy lifestyles, preventative care, and mental health awareness.</li>
        <li><strong>FAQs:</strong> Address common health questions and concerns to educate the public.</li>
        <li><strong>Content for Professionals:</strong> Generate materials for healthcare providers focusing on best practices and latest research.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'E-commerce':
      content = `
      <h3>E-commerce Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Product Descriptions:</strong> Write engaging and informative descriptions that highlight features and benefits.</li>
        <li><strong>User Reviews:</strong> Generate content from customer experiences to build trust and authenticity.</li>
        <li><strong>Blog Content:</strong> Create articles that provide shopping tips, product comparisons, and style guides.</li>
        <li><strong>Marketing Emails:</strong> Develop email campaigns that promote new products and special offers.</li>
        <li><strong>Social Media Promotions:</strong> Craft content for social media that drives traffic to the e-commerce site.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Travel':
      content = `
      <h3>Travel Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Travel Guides:</strong> Create comprehensive guides covering popular destinations, travel tips, and itineraries.</li>
        <li><strong>Destination Blogs:</strong> Write engaging articles that showcase local attractions, culture, and experiences.</li>
        <li><strong>Photography:</strong> Provide stunning visuals capturing the essence of various locations.</li>
        <li><strong>Travel Videos:</strong> Produce videos that highlight travel experiences, tips, and recommendations.</li>
        <li><strong>Social Media Content:</strong> Generate engaging posts for travel enthusiasts, showcasing adventures and tips.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Finance':
      content = `
      <h3>Finance Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Investment Guides:</strong> Create detailed guides on various investment options and strategies.</li>
        <li><strong>Budgeting Tips:</strong> Write articles on effective budgeting and financial planning techniques.</li>
        <li><strong>Market Analysis:</strong> Provide analyses on market trends, economic factors, and investment advice.</li>
        <li><strong>Financial News:</strong> Create timely updates on current events affecting the financial world.</li>
        <li><strong>FAQs:</strong> Address common financial questions and provide expert insights.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Nonprofit':
      content = `
      <h3>Nonprofit Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Awareness Campaigns:</strong> Create content that raises awareness about key social issues.</li>
        <li><strong>Fundraising Materials:</strong> Develop compelling materials to attract donations and support.</li>
        <li><strong>Volunteer Stories:</strong> Highlight personal stories from volunteers to inspire others.</li>
        <li><strong>Impact Reports:</strong> Provide detailed reports showcasing the organization's achievements.</li>
        <li><strong>Newsletters:</strong> Create newsletters to keep supporters informed and engaged.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;

    case 'Gaming':
      content = `
      <h3>Gaming Content for ${projectName}</h3>
      <p>Project Name: ${projectName}</p>
      <p>Content Ideas:</p>
      <ul>
        <li><strong>Game Design Documents:</strong> Create comprehensive documents detailing game mechanics, storylines, and characters.</li>
        <li><strong>Gameplay Videos:</strong> Produce engaging videos that showcase gameplay and strategies.</li>
        <li><strong>Game Reviews:</strong> Write reviews that provide insights into new games and trends.</li>
        <li><strong>Community Engagement:</strong> Develop content that fosters interaction and community building among players.</li>
        <li><strong>Streaming Content:</strong> Create engaging scripts and content for live streams and gaming events.</li>
      </ul>
      <p>Integration Description: ${integrationDescription}</p>
      `;
      break;
    
    default:
      content = `<p>No content available for this category.</p>`;
  }

  document.getElementById('generatedContent').innerHTML = content;
}

function copyToClipboard() {
  const content = document.getElementById('generatedContent').innerHTML;
  navigator.clipboard.writeText(content)
    .then(() => alert('Content copied to clipboard!'))
    .catch(err => alert('Failed to copy content: ' + err));
}
