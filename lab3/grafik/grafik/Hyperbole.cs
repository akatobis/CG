using OpenTK.Graphics.OpenGL;

namespace grafik;

public class Hyperbole
{
    public Hyperbole(int minX, int maxX, double numerator)
    {
        _numerator = numerator;
        _minX = minX;
        _maxX = maxX;
        
        FillCoordinateX();
        FillCoordinateY();
    }

    private readonly double _numerator;
    private readonly int _minX;
    private readonly int _maxX;
    
    public List<Coordinate> CoordinateList = new List<Coordinate>();

    private void FillCoordinateX()
    {
        const double step = 0.01;
        
        for (double x = _minX; x < _maxX; x += step)
        {
            CoordinateList.Add(new Coordinate(x));
        }
    }

    private void FillCoordinateY()
    {
        foreach (var coordinate in CoordinateList)
        {
            if (coordinate.X == 0)
            {
                coordinate.Y = 0;
                continue;
            }
            coordinate.Y = _numerator / coordinate.X;
        }
    }

    public void Draw()
    {
        const double epsilon = 0.0000001;
        
        GL.Begin(PrimitiveType.LineStrip);
        GL.Color3(0.0, 1.0, 0.0);

        foreach (var coordinate in CoordinateList)
        {
            if (Math.Abs(coordinate.X) < epsilon)
            {
                GL.End();
                GL.Begin(PrimitiveType.LineStrip);
                continue;
            }
            
            GL.Vertex2(coordinate.X, coordinate.Y);
        }
        
        GL.End();
    }
}