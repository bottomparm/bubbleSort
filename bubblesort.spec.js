describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one item', function(){
        expect( bubbleSort([4]) ).toEqual( [4] );
      });

    it('handles an array with two items', function(){
        expect( bubbleSort([5, 4]) ).toEqual( [4, 5] );
      });

      it('handles an array with multiple items', function(){
        expect( bubbleSort([4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4] );
      });
  });