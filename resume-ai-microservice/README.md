# Resume AI Microservice

This project is a Node.js microservice for AI-powered resume analysis. It provides a REST API for analyzing resumes, extracting skills, suggesting job titles, and performing health checks. The service integrates with the Hugging Face API for language model processing and supports various resume formats including PDF, DOCX, and TXT.

## Features

- **Express.js REST API**: A robust API server with multiple endpoints for resume analysis.
- **Endpoints**:
  - `POST /analyze`: Analyze a resume and extract skills.
  - `POST /extract-skills`: Extract skills from resume text.
  - `POST /suggest-titles`: Suggest job titles based on extracted skills.
  - `GET /health`: Health check endpoint to verify the service is running.
- **Hugging Face API Integration**: Utilizes the Hugging Face API for advanced language model processing.
- **Resume Text Parsing**: Supports parsing of PDF, DOCX, and TXT formats.
- **Skills Extraction**: Implements NLP techniques to extract relevant skills from resumes.
- **Job Title Recommendation**: Suggests job titles based on the skills extracted from resumes.
- **Input Validation**: Uses Joi for validating incoming requests.
- **Error Handling**: Comprehensive error handling middleware to manage errors gracefully.
- **MongoDB Integration**: Caches analysis results in MongoDB for improved performance.
- **Environment Configuration**: Uses environment variables for sensitive configurations.
- **Rate Limiting**: Implements rate limiting for API calls to prevent abuse.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/resume-ai-microservice.git
   cd resume-ai-microservice
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your configurations, such as database connection strings and API keys.

4. Start the server:
   ```
   node server.js
   ```

## API Usage

### Analyze Resume
- **Endpoint**: `POST /analyze`
- **Request Body**: JSON containing the resume file.
- **Response**: JSON with analysis results and extracted skills.

### Extract Skills
- **Endpoint**: `POST /extract-skills`
- **Request Body**: JSON containing the resume text.
- **Response**: JSON with a list of extracted skills.

### Suggest Job Titles
- **Endpoint**: `POST /suggest-titles`
- **Request Body**: JSON containing the extracted skills.
- **Response**: JSON with suggested job titles.

### Health Check
- **Endpoint**: `GET /health`
- **Response**: JSON indicating the service status.

## Docker

To run the microservice in a Docker container, build the Docker image and run it:

1. Build the Docker image:
   ```
   docker build -t resume-ai-microservice .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 resume-ai-microservice
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.