import type { Meta } from '@storybook/react';
import { TextInput } from '../components/Inputs/TextInput';
import { FormWrapper } from '../components/FormWrapper';
import { useState } from 'react';

const SampleTextInput = () => {
    const [text, setText] = useState<string>('')

    return <FormWrapper title='Let us your email' index={1}>
        <TextInput onChange={(e) => setText(e.target.value)} value={text} placeholder="Enter text" />
    </FormWrapper>
}

const meta: Meta = {
    component: SampleTextInput,
    title: 'TextInput',
}

export const Default = () => <SampleTextInput />;

export default meta;