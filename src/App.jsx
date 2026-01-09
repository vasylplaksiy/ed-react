import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import './index.css';

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please select a topic to see an example.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton.toLowerCase());
    }

    return (
        <>
            <Header />
            <main>
                <h2>Time to get started!</h2>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept {...concept} key={concept.title} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            onSelect={() => handleSelect('Components')}
                            isSelected={selectedTopic === 'components'}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            onSelect={() => handleSelect('JSX')}
                            isSelected={selectedTopic === 'jsx'}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            onSelect={() => handleSelect('Props')}
                            isSelected={selectedTopic === 'props'}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            onSelect={() => handleSelect('State')}
                            isSelected={selectedTopic === 'state'}
                        >
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </>
    );
}

export default App;
