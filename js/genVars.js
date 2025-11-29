const commonSuffixes = {
    background: {
        changes_with_state: true,
    },
    "border-block": {
        changes_with_state: true,
    },
    "border-inline": {
        changes_with_state: true,
    },
    "border-start-start-radius": {
        changes_with_state: true,
    },
    "border-start-end-radius": {
        changes_with_state: true,
    },
    "border-end-end-radius": {
        changes_with_state: true,
    },
    "border-end-start-radius": {
        changes_with_state: true,
    },
    "box-shadow": {
        changes_with_state: true,
    },
    "padding-block": {
        changes_with_state: false,
    },
    "padding-inline": {
        changes_with_state: false,
    },
    "margin-block": {
        changes_with_state: false,
    },
    "margin-inline": {
        changes_with_state: false,
    },
    gap: {
        changes_with_state: false,
    },
};

const textSuffixes = {
    color: {
        changes_with_state: true,
    },
    "text-decoration": {
        changes_with_state: true,
    },
    "text-wrap": {
        changes_with_state: false,
    },
    "font-size": {
        changes_with_state: true,
    },
    "font-weight": {
        changes_with_state: true,
    },
    "text-overflow": {
        changes_with_state: false,
    },
    "line-height": {
        changes_with_state: false,
    },
};

const produceCommonVariables = (prefix, states) => {
    for (const suffix of Object.keys(commonSuffixes)) {
        console.log(`--${prefix}-${suffix}`);
    }
    for (const state of states) {
        for (const [suffix, suffixSpec] of Object.entries(commonSuffixes)) {
            if (suffixSpec.changes_with_state) {
                console.log(`--${prefix}-${state}-${suffix}`);
            }
        }
    }
};

const produceTextVariables = (prefix, states) => {
    for (const suffix of Object.keys(textSuffixes)) {
        console.log(`--${prefix}-${suffix}`);
    }
    for (const state of states) {
        for (const [suffix, suffixSpec] of Object.entries(textSuffixes)) {
            if (suffixSpec.changes_with_state) {
                console.log(`--${prefix}-${state}-${suffix}`);
            }
        }
    }
};

const prefixes = [
    {
        name: "card",
        producer: (name, states) => {
            produceCommonVariables(name, states);
            produceTextVariables(name, states);
        },
        states: [],
    },
    {
        name: "card-section",
        producer: produceCommonVariables,
        states: [],
    },
    {
        name: "button",
        producer: (name, states) => {
            produceCommonVariables(name, states);
            produceTextVariables(name, states);
        },
        states: ["active", "hover", "focus"],
    },
];

const produceVariables = () => {
    for (const prefix of prefixes) {
        prefix.producer(prefix.name, prefix.states);
    }
};
produceVariables();
