import { useState, useCallback } from 'react';

import { SETTINGS } from '../../lib/sudoku-model';


function CheckBoxSetting ({name, text, allSettings, setSetting}) {
    const currValue = !!allSettings[name];
    return (
        <li>
            <label>
                {text}
                <input
                    className="toggle"
                    type="checkbox"
                    checked={currValue}
                    onChange={() => setSetting(name, !currValue)}
                />
                <span className="indicator" />
            </label>
        </li>
    );
}

function SelectionSetting ({name, text, allSettings, setSetting, options}) {
    const currValue = allSettings[name];
    return (
        <li>
            <label>
                {text}
                <select
                    className="selection"
                    onChange={(e) => setSetting(name, Number(e.target.value))}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value} selected={currValue == opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </label>
        </li>
    );
}

export default function ModalSettings({modalHandler, modalState}) {
    const [allSettings, setAllSettings] = useState(modalState.currentSettings);
    const setSetting = useCallback(
        (name, newValue) => {
            const newSettings = { ...allSettings, [name]: newValue };
            setAllSettings(newSettings);
        },
        [allSettings]
    );
    const cancelHandler = () => modalHandler('cancel');
    const saveHandler = () => modalHandler({
        action: 'save-settings',
        newSettings: allSettings,
    });
    return (
        <div className="modal settings">
            <h1>Settings</h1>
            <ul className="settings-list">
                <CheckBoxSetting
                    name={SETTINGS.darkMode}
                    text="Dark mode"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.customCss}
                    text="Custom CSS"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.hideNumbericKeys}
                    text="Hide on-screen keyboard digits"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <SelectionSetting
                    name={SETTINGS.alignCanvasPosition}
                    text="Align canvas position"
                    allSettings={allSettings}
                    setSetting={setSetting}
                    options={[
                        { value: "0", label: "Left"},
                        { value: "1", label: "Right"},
                        { value: "2", label: "Center"}
                    ]}
                />
                <CheckBoxSetting
                    name={SETTINGS.showTimer}
                    text="Show timer"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.simplePencilMarking}
                    text="“Simple” pencil marking mode"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.outlineSelection}
                    text="Show selection as outline"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.highlightMatches}
                    text="Highlight matching digits"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.highlightConflicts}
                    text="Highlight conflicting digits"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.autocleanPencilmarks}
                    text="Auto-clean pencil marks"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.shortenLinks}
                    text="Shorten links"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.showRatings}
                    text="Show puzzle rating numbers"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.flipNumericKeys}
                    text="Flip on-screen keyboard digits"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.playVictoryAnimation}
                    text="Play animation when puzzle solved"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
                <CheckBoxSetting
                    name={SETTINGS.autoSave}
                    text="Auto-save progress"
                    allSettings={allSettings}
                    setSetting={setSetting}
                />
            </ul>
            <div className="buttons">
                <button className="cancel" onClick={cancelHandler}>Cancel</button>
                <button className="primary" onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}
