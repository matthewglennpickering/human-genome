
# Human Genome Representation in JavaScript

This JavaScript program provides a basic structure to represent the human genome. It simulates a simplified version of the genome structure using random DNA sequences for each of the 23 pairs of human chromosomes.

## Overview

The human genome consists of 23 pairs of chromosomes, each made up of DNA sequences containing four nucleotides: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). This program creates a basic representation of this genome structure in JavaScript.

## Program Structure

The program consists of three main classes:

1. **DNASequence**: Represents a sequence of DNA by generating a random sequence of nucleotides.
2. **Chromosome**: Represents a chromosome with a specific name and associated DNA sequence.
3. **HumanGenome**: Represents the entire human genome by creating 23 chromosomes, each with a unique name and DNA sequence.

## Class Definitions

### DNASequence

The `DNASequence` class is responsible for generating a random DNA sequence of a specified length.

- **Constructor**: Takes a single parameter, `length`, representing the length of the DNA sequence.
- **Methods**:
  - `generateRandomSequence(length)`: Generates a random sequence of nucleotides (A, T, C, G) with the specified length.

### Chromosome

The `Chromosome` class represents a single chromosome, containing its name and DNA sequence.

- **Constructor**: Takes two parameters:
  - `name`: The name of the chromosome (e.g., "Chromosome 1").
  - `length`: The length of the DNA sequence to be generated for this chromosome.

### HumanGenome

The `HumanGenome` class represents the entire human genome by creating 23 chromosomes.

- **Constructor**: Initializes the genome with a set of 23 chromosomes.
- **Methods**:
  - `createChromosomes()`: Creates 23 chromosomes with random DNA sequences.
  - `displayGenome()`: Logs each chromosome's name and its DNA sequence to the console.

## How to Use

1. **Download or copy the program code** into a JavaScript file (e.g., `humanGenome.js`).
2. **Run the JavaScript file** in a browser or with Node.js to view the output of the human genome structure in the console.

## Example Code

```javascript
// Define a class for a DNA sequence
class DNASequence {
  constructor(length) {
    this.sequence = this.generateRandomSequence(length);
  }

  // Generate a random DNA sequence of given length
  generateRandomSequence(length) {
    const nucleotides = ['A', 'T', 'C', 'G'];
    let sequence = '';
    for (let i = 0; i < length; i++) {
      sequence += nucleotides[Math.floor(Math.random() * nucleotides.length)];
    }
    return sequence;
  }
}

// Define a class for a Chromosome
class Chromosome {
  constructor(name, length) {
    this.name = name;
    this.dna = new DNASequence(length);
  }
}

// Define a class for the Human Genome
class HumanGenome {
  constructor() {
    this.chromosomes = this.createChromosomes();
  }

  // Create 23 pairs of chromosomes with random DNA sequences
  createChromosomes() {
    const chromosomeNames = [
      'Chromosome 1', 'Chromosome 2', 'Chromosome 3', 'Chromosome 4', 'Chromosome 5',
      'Chromosome 6', 'Chromosome 7', 'Chromosome 8', 'Chromosome 9', 'Chromosome 10',
      'Chromosome 11', 'Chromosome 12', 'Chromosome 13', 'Chromosome 14', 'Chromosome 15',
      'Chromosome 16', 'Chromosome 17', 'Chromosome 18', 'Chromosome 19', 'Chromosome 20',
      'Chromosome 21', 'Chromosome 22', 'Chromosome X', 'Chromosome Y'
    ];

    const chromosomes = chromosomeNames.map(name => new Chromosome(name, 1000)); // Simulate a DNA length of 1000 for simplicity
    return chromosomes;
  }

  // Display the genome structure
  displayGenome() {
    this.chromosomes.forEach(chromosome => {
      console.log(`${chromosome.name}: ${chromosome.dna.sequence}`);
    });
  }
}

// Create a new Human Genome
const humanGenome = new HumanGenome();
humanGenome.displayGenome();
```

## Output

When the program is executed, it will output the following to the console:

```
Chromosome 1: ATCG... (random sequence)
Chromosome 2: TCGG... (random sequence)
...
Chromosome X: GATC... (random sequence)
Chromosome Y: CGAT... (random sequence)
```

## Requirements

- A JavaScript runtime environment (e.g., a web browser or Node.js).

## License

This program is open-source and available under the MIT License.

## Contributions

Contributions and improvements are welcome! Please feel free to fork the repository and submit pull requests.
# human-genome
