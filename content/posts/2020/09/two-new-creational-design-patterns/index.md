---
title: "Two new creational design patterns"
date: 2020-09-21
---

## Polluting Factory Method

```
import java.awt.*;
import java.util.function.Consumer;

public class Fish {
    private final String name;
    private final int numberOfEyes;
    private final Color color;

    private Fish(String name, Options opts) {
        this.name = name;
        this.numberOfEyes = opts.numberOfEyes;
        this.color = opts.color;
    }

    static class Options {
        int numberOfEyes = 2;
        Color color = Color.ORANGE;
    }

    public static Fish create(String name, Consumer<Options> optSetter) {
        Options opts = new Options();
        optSetter.accept(opts);
        return new Fish(name, opts);
    }

    public static void main(String[] args) {
        Fish blinky = Fish.create("Blinky", opts -> opts.numberOfEyes = 3);
    }
}

```

I named this the polluting factory method pattern because it relies on mutation. The nifty thing about this pattern is if you squint really hard, it looks like you have named parameters, or especially if you use a multi-line lambda, it looks almost like an object literal.

What I like about this pattern is that there is a clear distinction between required parameters and optional ones. Also, by using the most succinct class syntax in Java, there is relatively little boilerplate.

## Lockstep Builder Pattern

```
public class Sandwich {
    private final Bread.Slice bottom;
    private final Filling filling;
    private final Bread.Slice top;

    private Sandwich(Bread.Slice bottom, Filling filling, Bread.Slice top) {
        this.bottom = bottom;
        this.filling = filling;
        this.top = top;
    }

    static class OpenFacedSandwich {
        private final Bread.Slice bottom;
        private final Filling filling;

        OpenFacedSandwich(Bread.Slice bottom, Filling filling) {
            this.bottom = bottom;
            this.filling = filling;
        }

        Sandwich addTop(Bread.Slice top) {
            return new Sandwich(bottom, filling, top);
        }
    }

    public static void main(String[] args) {
        Bread wheatLoaf = new Bread();
        Sandwich turkeyOnWheat = wheatLoaf.slice()
                .addFilling(new Turkey())
                .addTop(wheatLoaf.slice());
    }
}

```

```
public class Bread {
    public static class Slice {
        Sandwich.OpenFacedSandwich addFilling(Filling filling) {
            return new Sandwich.OpenFacedSandwich(this, filling);
        }
    }

    public Slice slice() {
        return new Slice();
    }
}

public interface Filling {
}

public class Turkey implements Filling {
}

```

The heart of this pattern is having a new class for each required field and a single method on each builder class which returns the next step. Compared to the builder pattern, this goes in the opposite direction. It is very verbose. The point of this pattern is to make object creation as easy as possible. By having only one method on each class, your IDE will practically walk you through creating the object step by step. If you instantiate an object often enough, eventually it might be worthwhile to invest in designing the class this way. Or if you use some form of code generation, that might also tip the scales to make this worthwhile.
