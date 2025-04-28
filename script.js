fetch('jobs.json')
.then(response => response.json())
.then(data => {
    const jobList = document.getElementById('job-list');
    data.jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <button class="btn">Apply Now</button>
        `;
        jobList.appendChild(jobCard);
    });
})
.catch(error => console.error('Error loading jobs:', error));
