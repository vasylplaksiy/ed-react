import { useState } from 'react';
import Section from '../Section/Section.jsx';
import TabButton from '../TabButton/TabButton.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import { EXAMPLES } from '../../data.js';
import './Examples.css';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton.toLowerCase());
    }

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

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            onClick={() => handleSelect('Components')}
                            isSelected={selectedTopic === 'components'}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            onClick={() => handleSelect('JSX')}
                            isSelected={selectedTopic === 'jsx'}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            onClick={() => handleSelect('Props')}
                            isSelected={selectedTopic === 'props'}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            onClick={() => handleSelect('State')}
                            isSelected={selectedTopic === 'state'}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
