import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../../data.js';
import Section from '../Section/Section.jsx';

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept {...concept} key={concept.title} />
                ))}
            </ul>
        </Section>
    );
}
