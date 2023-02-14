import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import './questionposter.css';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Button from '@mui/material/Button/Button';
import Slider from '@mui/material/Slider/Slider';

type QuestionPosterProps = {
    expanded: boolean,
    question?: string,
    tags?: string[],
    duration?: number[],
    responsesToAccept?: number,
}

const responseMarks = [
    {
        value: 0,
        label: 5,
    },
    {
        value: 100,
        label: 100,
    },
];

const durationMarks = [
    {
        value: 0,
        label: '1 day',
    },
    {
        value: 100,
        label: '10 days',
    },
];

function valuetext(value: number) {
    return `${value}`;
}

export const QuestionPoster = ({expanded, question, tags, duration, responsesToAccept}: QuestionPosterProps) => {
    const QUESTION_CHAR_LIMIT = 200;
    const [values, setValues] = useState({
        input: ""
    });
    const [isExpanded, setExpanded] = useState(expanded);
    const [showQuickQuestion, setQuickQuestion] = useState(false);
    const [topic, setTopic] = useState('');
    const [quickQuestionTemplate, setquickQuestionTemplate] = useState('');
    const [responses, setResponses] = useState<number[]>([0, 100]);

    const handleExpand = () => {
        setExpanded((prev) => !prev);
    };

    const handleQuickQuesitonExpand = () => {
        setQuickQuestion((prev) => !prev);
    };

    const handleTextInput = (input: string) => (event: { target: { value: any; }; }) => {
        setValues({...values, [input]: event.target.value})
    }

    const handleSelectTopicChange = (event: SelectChangeEvent) => {
        setTopic(event.target.value as string);
    }

    const handleSelectQuickQuestion = (event: SelectChangeEvent) => {
        setquickQuestionTemplate(event.target.value as string);
    }

    const handleDurationChange = (event: Event, newValue: number | number[]) => {
        setResponses(newValue as number[]);
    }

    return (
        <div id='QuestionPoster-Container'>
            <div id='QuestionPoster-Header'>
                {!isExpanded &&
                    <div className='container-Minimized'>
                        <IconButton aria-label='expand' onClick={handleExpand}>
                            <CircleIcon fontSize='large'></CircleIcon>
                        </IconButton>
                        <TextField fullWidth variant="outlined" placeholder='Ask a question' />
                    </div>
                }
                {isExpanded &&
                    <div id='QuestionPoster-HeaderExanded'>
                        <h1>Ask a question</h1>
                        <TextField 
                            fullWidth 
                            multiline 
                            placeholder='Start typing your own or choose from our quick question template below'
                            value={values.input}
                            helperText={`${values.input?.length}/${QUESTION_CHAR_LIMIT}`}
                            onChange={handleTextInput("input")}></TextField>
                    </div>
                }
            </div>
            {isExpanded &&
                <>
                    <div id='QuestionPoster-QuickQuestion'>
                        View Info
                        <IconButton aria-label='expand' onClick={handleQuickQuesitonExpand}>
                            {!showQuickQuestion ? (
                                <ExpandMoreIcon/>
                            ) : (
                                <ExpandLessIcon/>
                            )}
                        </IconButton>
                    </div>
                    {showQuickQuestion && 
                        <div id='QuestionPoster-QuickQuestionExpanded'>
                            <FormControl>
                                <InputLabel id="lblSelectTopic">Select a topic</InputLabel>
                                <Select
                                    labelId="lblSelectTopic"
                                    id="selectTopic"
                                    value={topic}
                                    onChange={handleSelectTopicChange}
                                >
                                    <MenuItem value={10}>Example</MenuItem>
                                    <MenuItem value={20}>Example2</MenuItem>
                                </Select>
                            </FormControl>
                            
                            {topic !== '' && 
                                <FormControl>
                                    <InputLabel id="lblSelectQuickQuestion">Suggested Question</InputLabel>
                                    <Select
                                        labelId="lblSelectQuickQuestion"
                                        id="selectQuickQuestion"
                                        value={quickQuestionTemplate}
                                        onChange={handleSelectQuickQuestion}
                                    >
                                    </Select>
                                </FormControl>
                            }
                            {topic === '' && 
                                <FormControl>
                                    <InputLabel id="lblSelectQuickQuestionDisabled">Suggested Question</InputLabel>
                                    <Select disabled
                                        labelId="lblSelectQuickQuestionDisabled"
                                        id="selectQuickQuestionDisabled"
                                    >
                                    </Select>
                                </FormControl>
                            }
                        </div>
                    }
                    <div id='QuestionPoster-Footer'>
                        <div id='QuestionPoster-Tags'>
                            <h1>Add tags</h1>
                            <p> Placeholder </p>
                        </div>
                        <div id='QuestionPoster-Duration'>
                            <h1>Duration</h1>
                            <div className='sliderAndInfo'>
                                <Slider sx={{width: 350}}
                                        aria-label="Always visible"
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        step={1}
                                        marks={durationMarks}
                                        valueLabelDisplay="auto"
                                        />
                                <div>
                                    <h3>3 days</h3>
                                    <p>Average length</p>
                                </div>
                            </div>
                        </div>
                        <div id='QuestionPoster-Responses'>
                            <h1>Responses Accepted</h1>
                            <div className='sliderAndInfo'>
                                <Slider sx={{width: 350}}
                                    getAriaLabel={() => 'Responses'}
                                    value={responses}
                                    onChange={handleDurationChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    marks={responseMarks} />
                                <div>
                                    <h3>30-40 responses</h3>
                                    <p>Average based on length</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='QuestionPoster-Buttons'>
                        <Button variant='outlined'>Save as Draft</Button>
                        <Button variant='contained'>Post</Button>
                    </div>
                </>
            }
        </div>
    )
};
