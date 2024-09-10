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
  