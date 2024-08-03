import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Yanski');

  const codeExample = name || 'hello world'
  return (
    <section>
      {/* {if(someCondition){"Won't work"}} */}
      <h2>short circuit overview</h2>
      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND : {text && 'hello world'}</h4>
      <h4>Truthy OR : {text || 'hello world'}</h4>
      <h4>Truthy AND : {text && 'hello world'}</h4>
      {codeExample}


    </section>
)
};
export default ShortCircuitOverview;
 