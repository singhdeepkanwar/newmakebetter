/**
 * Submission Service
 * Centralized service for handling form submissions (Contact, Career, etc.)
 */

const submissionService = {
    /**
     * Generic submit function
     * Currently simulates an API call with a delay.
     * Can be easily updated to use fetch() to a real endpoint like Formspree or a Vercel API.
     */
    async submitForm(type, data) {
        console.log(`Submitting ${type} form:`, data);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type, data }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Submission failed');
            }

            return result;
        } catch (error) {
            console.error('Submission service error:', error);
            // Re-throw to be handled by the component
            throw error;
        }
    },

    /**
     * Specific wrapper for Contact submissions
     */
    async submitContact(data) {
        return this.submitForm('contact', data);
    },

    /**
     * Specific wrapper for Career applications
     */
    async submitCareer(data) {
        return this.submitForm('career', data);
    }
};

export default submissionService;
