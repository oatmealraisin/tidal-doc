module.exports = {
  docs: [
	  "TidalCycles",
	  {
      "Getting Started": [
        {
          "Installing Tidal": [
            "getting-started/linux_install",
            "getting-started/macos_install",
            "getting-started/windows_install",
          ],
  		  },
  		  "getting-started/tidal_start",
  		  {
          "Upgrade & Downgrade": [
            "getting-started/upgrading",
            "getting-started/downgrading",
            "getting-started/uninstalling",
          ],
          "Get a Text Editor": [
            "getting-started/editor/Atom",
            "getting-started/editor/Vim",
            "getting-started/editor/Emacs",
            "getting-started/editor/VS_Code",
            "getting-started/editor/Sublime_Text",
          ],
          "Troubleshooting": [
            "troubleshoot/troubleshoot_linux",
            "troubleshoot/troubleshoot_macos",
            "troubleshoot/troubleshoot_windows",
          ],
        },
      ],
		"Basics": [
          "patternlib/tutorials/cycles",
          "patternlib/tutorials/patterns",
          "patternlib/tutorials/pattern_structure",
          "patternlib/tutorials/mini_notation",
		],
      "Pattern Library": [
        "patternlib/tutorials/online_course",
        "patternlib/tutorials/oscillators",
        "patternlib/tutorials/synthesizers",
        "patternlib/tutorials/audio_effects",
        "patternlib/tutorials/controls",
        "patternlib/tutorials/tempo",
        "patternlib/tutorials/transitions",
        "patternlib/tutorials/state_values",
        {
          "Small reference": [
            "patternlib/tour/concatenation",
            "patternlib/tour/accumulation",
            "patternlib/tour/alteration",
            "patternlib/tour/performance",
            "patternlib/tour/conditions",
            "patternlib/tour/time",
            "patternlib/tour/harmony_melody",
            "patternlib/tour/transitions",
            "patternlib/tour/sampling",
            "patternlib/tour/randomness",
            "patternlib/tour/composition",
          ],
        },
      ],
      "How-tos": [
        "patternlib/howtos/buildarpeggios",
        "patternlib/howtos/buildrhythms",
        "patternlib/howtos/playchords",
        "patternlib/howtos/startpattern",
      ],
      Tutorials: [
        "patternlib/tutorials/workshop",
        "patternlib/tutorials/course1",
        "patternlib/tutorials/course2",
      ],
      "How does Tidal Work?": [
        {
          Haskell: [
            "innards/haskell",
            "innards/meaning_of_dollar",
            "innards/meaning_of_dot",
            "innards/type_signatures",
            "innards/contributing_test",
          ],
          Concept: ["innards/what_is_a_pattern"],
        },
      ],
      Configuration: [
        {
          "Tidal Configuration": [
            "configuration/multiuser-tidal",
            "configuration/boot-tidal",
          ],
          "Tidal Tools": [
            "configuration/tidal-vis",
            "configuration/tidal-listener",
          ],
  
          "SuperDirt Configuration": [
            "configuration/adding_effects",
            "configuration/adding_global_effects",
            "configuration/adding_synthesizers",
          ],
          "I/O (MIDI, OSC)": [
            "configuration/MIDIOSC/midi",
            "configuration/MIDIOSC/osc",
            "configuration/MIDIOSC/connecting_to_a_daw",
            "configuration/MIDIOSC/control-voltage",
          ],
          "Audio samples": [
            "configuration/Audio Samples/audiosamples",
            "configuration/Audio Samples/default_library",
            "configuration/Audio Samples/lazy_loading",
            "configuration/Audio Samples/find_samples",
          ],
          "Sound and audio": ["configuration/AudioConfig/audio_outputs"],
        },
      ],
      "Around Tidal": [
        "community",
        "showcase",
        "around_tidal/typing_fast_and_well",
        "around_tidal/toplap_manifesto",
        "around_tidal/tidal_history",
        "around_tidal/changelog",
      ],
    },
  ],
  advanced: {
    "Understanding innards": [
      "advanced/understanding-innards/What_is_a_pattern",
      "advanced/understanding-innards/Type_signatures",
      "advanced/understanding-innards/Haskell_resources",
    ],
  },
  reference: {
    Basics: [
      "reference/cycles",
      "reference/patterns",
      "reference/pattern_structure",
      "reference/mini_notation",
      "reference/oscillators",
      "reference/synthesizers",
      "reference/audio_effects",
      "reference/controls",
      "reference/tempo",
      "reference/transitions",
      "reference/state_values",
    ],
    Reference: [
      "reference/even-more",
      "reference/concatenation",
      "reference/accumulation",
      "reference/alteration",
      "reference/performance",
      "reference/conditions",
      "reference/time",
      "reference/harmony_melody",
      "reference/transitions",
      "reference/sampling",
      "reference/randomness",
      "reference/composition",
    ],
  },
  community: [
    "resource/Community",
    "resource/Friends_and_relations",
    "resource/Contributing_tests",
    "resource/Academic_publications",
    "resource/History_of_Tidal",
  ],
};
