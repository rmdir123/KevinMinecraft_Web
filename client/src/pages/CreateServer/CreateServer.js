import React, { useState } from 'react';
import './CreateServer.css';

const CreateServer = () => {
    const [formData, setFormData] = useState({
        serverName: '',
        minecraftVersion: '1.20.4',
        gameMode: 'survival',
        maxPlayers: 20
    });
    const [operators, setOperators] = useState(['']);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOperatorChange = (index, value) => {
        const newOperators = [...operators];
        newOperators[index] = value;
        setOperators(newOperators);
    };

    const addOperator = () => {
        setOperators([...operators, '']);
    };

    const removeOperator = (index) => {
        const newOperators = operators.filter((_, i) => i !== index);
        setOperators(newOperators);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Filter out empty operator names
        const validOperators = operators.filter(op => op.trim() !== '');
        const submitData = { ...formData, operators: validOperators };
        console.log('Server Data Submitted:', submitData);
        alert(`Server "${formData.serverName}" created successfully! Check console for details.`);
    };

    return (
        <div className="create-server-container">
            <div className="create-server-card">
                <h2>Create New Server</h2>
                <p>Deploy your new KevinServ instance easily.</p>

                <form onSubmit={handleSubmit} className="server-form">
                    <div className="form-group">
                        <label>Server Name</label>
                        <input
                            type="text"
                            name="serverName"
                            value={formData.serverName}
                            onChange={handleChange}
                            placeholder="e.g. My Survival World"
                            required
                        />
                    </div>

                    <div className="form-group row-group">
                        <div className="form-group-half">
                            <label>Minecraft Version</label>
                            <div className="custom-select-wrapper">
                                <select
                                    name="minecraftVersion"
                                    value={formData.minecraftVersion}
                                    onChange={handleChange}
                                >
                                    <option value="1.20.4">1.20.4 (Latest)</option>
                                    <option value="1.20.2">1.20.2</option>
                                    <option value="1.19.4">1.19.4</option>
                                    <option value="1.18.2">1.18.2</option>
                                    <option value="1.16.5">1.16.5</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group-half">
                            <label>Max Players</label>
                            <input
                                type="number"
                                name="maxPlayers"
                                value={formData.maxPlayers}
                                onChange={handleChange}
                                min="1"
                                max="1000"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Game Mode</label>
                        <div className="custom-select-wrapper">
                            <select
                                name="gameMode"
                                value={formData.gameMode}
                                onChange={handleChange}
                            >
                                <option value="survival">Survival</option>
                                <option value="creative">Creative</option>
                                <option value="adventure">Adventure</option>
                                <option value="spectator">Spectator</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group operators-group">
                        <label>Operator Usernames</label>
                        <p className="helper-text">Add admins who will have OP permissions in-game</p>

                        <div className="operators-list">
                            {operators.map((op, index) => (
                                <div key={index} className="operator-input-row">
                                    <input
                                        type="text"
                                        value={op}
                                        onChange={(e) => handleOperatorChange(index, e.target.value)}
                                        placeholder="Enter Minecraft Username"
                                    />
                                    {operators.length > 1 && (
                                        <button type="button" className="btn-remove" onClick={() => removeOperator(index)} title="Remove operator">
                                            ✕
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button type="button" className="btn-add-operator" onClick={addOperator}>
                            + Add Username
                        </button>
                    </div>

                    <div className="form-submit-row">
                        <button type="submit" className="btn-submit">Deploy Server</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateServer;
