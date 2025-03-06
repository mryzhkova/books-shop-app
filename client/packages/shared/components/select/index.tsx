import { type KeyboardEvent, useEffect, useRef, useState } from 'react';

import { SVGIcon } from '../svg-icon';

import ChevronIcon from './assets/chevron.svg';
import {
    StyledDropdown,
    StyledLabel,
    StyledSelectWrapper,
    StyledSelectButton,
    StyledOption,
    StyledChevron,
    StyledPplaceholder,
    StyledValue,
    StyledSelectError,
} from './styled';
import { type SelectProps } from './types';

export const Select = ({
    options,
    value,
    onChange,
    label,
    placeholder,
    error,
    ...props
}: SelectProps) => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const selectRef = useRef<HTMLDivElement>(null);
    const optionsRefs = useRef<(HTMLLIElement | null)[]>([]);

    const handleOptionClick = (content: string) => {
        onChange(content);
        setSelectOpen(false);
    };

    const handleSelectClick = () => {
        setSelectOpen(!selectOpen);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab' || event.key === 'Escape') {
            setSelectOpen(false);
        }
        if (event.key === 'ArrowDown') {
            setFocusedIndex((prevIndex) => (prevIndex + 1) % options.length);
        }
        if (event.key === 'ArrowUp') {
            setFocusedIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
        }
        if (event.key === 'Enter' && focusedIndex >= 0) {
            handleOptionClick(options[focusedIndex].content);
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setSelectOpen(false);
        }
    };

    useEffect(() => {
        if (focusedIndex >= 0 && optionsRefs.current[focusedIndex]) {
            optionsRefs.current[focusedIndex]?.focus();
        }
    }, [focusedIndex]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <StyledSelectWrapper {...props}>
            <div ref={selectRef}>
                <StyledSelectButton
                    aria-expanded={selectOpen}
                    aria-haspopup='listbox'
                    aria-controls='dropdown-list'
                    onClick={handleSelectClick}
                    onKeyDown={handleKeyDown}
                    error={error}
                >
                    {value ? (
                        <StyledValue>{value}</StyledValue>
                    ) : (
                        <StyledPplaceholder open={selectOpen}>{placeholder}</StyledPplaceholder>
                    )}
                    <StyledChevron open={selectOpen}>
                        <SVGIcon Icon={ChevronIcon} />
                    </StyledChevron>
                </StyledSelectButton>
                <StyledLabel id='select-label' top={selectOpen || !!value}>
                    {label}
                </StyledLabel>
                {selectOpen && (
                    <StyledDropdown
                        id='dropdown-list'
                        role='listbox'
                        aria-labelledby='select-label'
                        aria-activedescendant={value}
                    >
                        {options.map(({ id, content }, index) => (
                            <StyledOption
                                key={id}
                                tabIndex={0}
                                role='option'
                                onClick={() => handleOptionClick(content)}
                                onKeyDown={handleKeyDown}
                                ref={(option) => {
                                    optionsRefs.current[index] = option;
                                }}
                            >
                                {content}
                            </StyledOption>
                        ))}
                    </StyledDropdown>
                )}
            </div>
            {error && <StyledSelectError>{error}</StyledSelectError>}
        </StyledSelectWrapper>
    );
};
