"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100

    >>> serial.__repr__()
    'Serialgenerator start=100 next=101'

    """
    def __init__(self, start = 0):
        """Make a new generator, starting at start."""

        self.start = self.next = start

    def __repr__(self):
        """Show representation."""

        return f"Serialgenerator start={self.start} next={self.next}"

    def generate(self):
        """return next serial."""

        self.next += 1
        return self.next -1

    def reset(self):
        """Reset number to original start."""

        self.next = self.start
        